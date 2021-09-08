<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use NotificationChannels\Telegram\TelegramChannel;
use NotificationChannels\Telegram\TelegramMessage;
use Illuminate\Notifications\Notification;
// https://telegram-bot-sdk.readme.io/docs/getting-started
class GlobalNotif extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    private $idTele, $param;
    public function __construct(array $msg)
    {
        $this->param= $msg;
        // $this->idTele= -321143573;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        // return ['mail'];
        return [TelegramChannel::class];
    }

    public function toTelegram($notifiable)
    {
        /* cara menggunakan notification telegram
        $notifyParam=[
            'title'     =>'Data Pelamar Baru',
            'message'   =>"\xF0\x9F\x93\xA2 Notification loker.arionindonesia.id : \n".
            "*".$user->name."* Berhasil Input Data Lowongan sebagai *".$job->name."*\n".
            "E-MAIL : ".$user->email."\n".
            "PHONE : ".($user->phone) ?? '-'."\n",
            'link'      =>route('jobs-apply.show',$jobApply->id),
            'link-gdrive'      =>"https://drive.google.com/drive/u/3/folders/".$folderEmployee['path']
        ];
        Notification::route('telegram', '-321143573')->notify(new GlobalNotifications($notifyParam));
        */


        return TelegramMessage::create()
            // Optional recipient user id.
            // ->to($this->idTele)
            // Markdown supported.
            ->content($this->param['message'])
            
            // (Optional) Blade template for the content.
            // ->view('notification', ['url' => $url])
            
            // (Optional) Inline Buttons
            ->button('Lihat Halaman', $this->param['link'])
            ->button('Lihat GDrive', $this->param['link-gdrive']);
            // ->button('Download Invoice', $url);
            // (Optional) Inline Button with callback. You can handle callback in your bot instance
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {

        /* return (new MailMessage)->markdown('vendor.notifications.email')
        ->subject('Subject Goes Here');
        ->markdown('mails.exmpl')
        ->with([
            'name' => 'New Mailtrap User',
            'link' => '/inboxes/'
        ]); */


        return (new MailMessage)
                    ->subject('Notification App nndroject')
                    ->level('success')
                    ->greeting('Notification!')
                    ->line('**Dinas Pendidikan Kota Malang** menambahkan permintaan jadwal pertemuan secara **Online** pada **15 Desember 2021**')
                    ->line('Baca selengkapnya dengan klik tombol dibawah ini untuk menuju ke halaman aplikasi.')
                    ->action('Open Document', url('/'))
                    ->line('Thank you for using our application!');

        
        
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}

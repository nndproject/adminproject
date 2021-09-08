/*! board.js | Huro | Css Ninja 2020-2021 */
"use strict";$(document).ready((function(){if($("#project-board").length){dragula([document.querySelector("#kanban-1"),document.querySelector("#kanban-2"),document.querySelector("#kanban-3")]).on("drop",(function(n){$(".kanban-column").each((function(){var n=$(this).find(".kanban-card").length;$(".column-title h3 span:nth-child(2)",this).html(n),$(".collapsed-content .task-count span",this).html(n),0==n?$(this).addClass("is-empty"):$(this).removeClass("is-empty")}))}));$(".kanban-card.is-new .card-footer-item:nth-child(2)").on("click",(function(){var n=$(this),t=n.closest(".kanban-card").find(".card-title").text();n.closest(".kanban-card").css({transform:"translateY(-40px)",opacity:0}),setTimeout((function(){n.closest(".kanban-card").remove(),$("#kanban-1").prepend('\n                    <div class="kanban-card gelatine">\n                        <div class="card-body">\n                            <h4 class="card-title">'+t+'</h4>\n                            <div class="kanban-card-stats">\n                                <span>\n                                    <i data-feather="clock"></i>\n                                    2 weeks\n                                </span>\n                                <div class="avatar-stack">\n                                    <div class="h-avatar is-small">\n                                        <img class="avatar" src="https://via.placeholder.com/150x150"\n                                            data-demo-src="assets/img/avatars/svg/2.gif" alt="">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                '),"development"===env&&changeDemoImages()}),400),setTimeout((function(){$(".kanban-column").each((function(){var n=$(this).find(".kanban-card").length;$(".column-title h3 span:nth-child(2)",this).html(n),$(".collapsed-content .task-count span",this).html(n),0==n?$(this).addClass("is-empty"):$(this).removeClass("is-empty")}))}),600)}));var n="";$(".kanban-rename").on("click",(function(){n=$(this).closest(".column-title").find(".column-name").text(),console.log(n),$(this).closest(".column-title").find("h3, .input").toggleClass("is-hidden"),$(this).closest(".column-title").find(".input").focus()})),$(".rename-input").on("blur",(function(){var t=$(this).val();$(this).val(""),0==t.length?($(this).closest(".column-title").find(".column-name").text(n),$(this).closest(".kanban-column").find(".collapsed-content .collapsed-text").text(n),$(this).closest(".column-title").find("h3, .input").toggleClass("is-hidden")):($(this).closest(".column-title").find(".column-name").text(t),$(this).closest(".kanban-column").find(".collapsed-content .collapsed-text").text(t),$(this).closest(".column-title").find("h3, .input").toggleClass("is-hidden"))})),$(".kanban-collapse").on("click",(function(){$(this).closest(".column").removeClass("is-one-fifth").addClass("is-1 is-mini").find(".kanban-column").addClass("is-collapsed")})),$(".expand-button").on("click",(function(){$(this).closest(".column").removeClass("is-1 is-mini").addClass("is-one-fifth").find(".kanban-column").removeClass("is-collapsed")}))}}));
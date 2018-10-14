<template>
<div class="tab-pane">
    <div class="mCustomScrollBar">
        <div class="ui-block-title ui-block-title-small">
            <h6 class="title">Friend Request</h6>
            <a class="">Find Friends</a>
            <a class="">Settings</a>
        </div>
        <ul class="notification-list friend-requests">
            <li>
                <div class="author-thumb">
                    <img alt="author" src="img/avatar55-sm.jpg" data-v-5ffdde4c="">
                </div>
                <div class="notification-event">
                    <a class="h6 notification-friend" href="#" data-v-5ffdde4c="">Tamara Romanoff</a><br/>
                    <span class="chat-message-item" data-v-5ffdde4c="">Mutual Friend: Sarah Hetfield</span>
                </div>
                <span class="notification-icon">
                    <a class="accept-request" href="#" data-v-5ffdde4c="">
                        <span class="icon-add without-text" data-v-5ffdde4c="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="olymp-happy-face-icon" data-v-5ffdde4c="">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon" data-v-5ffdde4c="" />
                            </svg>
                        </span>
                    </a>
                    <a class="accept-request request-del" href="#" data-v-5ffdde4c="">
                        <span class="icon-minus" data-v-5ffdde4c="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="olymp-happy-face-icon" data-v-5ffdde4c=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon" data-v-5ffdde4c="" />
                            </svg>
                        </span>
                    </a>
                </span>
                <div class="more" data-v-5ffdde4c="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="olymp-three-dots-icon" data-v-5ffdde4c="">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon" data-v-5ffdde4c="" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="olymp-little-delete" data-v-5ffdde4c="">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete" data-v-5ffdde4c="" />
                    </svg>
                </div>
            </li>
            <li class="accepted" data-v-5ffdde4c="">
                <div class="author-thumb" data-v-5ffdde4c="">
                    <img alt="author" src="img/avatar57-sm.jpg" data-v-5ffdde4c="">
                </div>
                <div class="notification-event" data-v-5ffdde4c="">
                    You and <a class="h6 notification-friend" href="#" data-v-5ffdde4c="">Mary Jane Stark</a> just became friends. Write on <a class="notification-link" href="#" data-v-5ffdde4c="">her wall</a>.
                </div>
                <span class="notification-icon mt-10" data-v-5ffdde4c="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="olymp-happy-face-icon" data-v-5ffdde4c="">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon" data-v-5ffdde4c="" />
                    </svg>
                </span>
                <div class="more" data-v-5ffdde4c="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="olymp-three-dots-icon" data-v-5ffdde4c="">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon" data-v-5ffdde4c="" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="olymp-little-delete" data-v-5ffdde4c="">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete" data-v-5ffdde4c="" />
                    </svg>
                </div>
            </li>
        </ul>
        <a class="view-all bg-blue" href="#" data-v-5ffdde4c="">Check all your Events</a>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    @import './css/notification-view-all';

        .tab-pane {
            
         
            .mCustomScrollBar {
                overflow-y: auto !important;
                max-height: calc(-140px + 100vh);

                .ui-block-title {
                    display: table;
                    line-height: 1px;
                    position: relative;
                    width: 100%;
                    border-bottom: 1px solid #e6ecf5;
                }
                .ui-block-title-small {
                    padding: 10px 25px;
                }
                .ui-block-title > * {
                    position: relative;
                    display: table-cell;
                    vertical-align: middle;

                   
                    
                }
                 .title {
                        font-size: 9px !important;
                        text-transform: uppercase;
                        color: #9a9fbf;
                    }
                
                ul {
                    padding: 0;

                    li {
                        padding: 25px;
                        border-bottom: 1px solid #e6ecf5;
                        display: block;
                        position: relative;
                        transition: all .3s ease;

                        svg {
                            width: 22px;
                            height: 20px;
                        }

                        .more {
                            opacity: 0;
                            position: absolute;
                            right: 10px;
                            top: 5px;
                            font-size: 10px;
                            color: #d6d9e6;
                            fill: #c0c4d8;

                            .olymp-three-dots-icon {
                                width: 16px;
                                height: 4px;
                                margin-right: 5px;
                            }

                            .olymp-little-delete {
                                width: 8px;
                                height: 8px;
                            }
                        }

                         &:hover {
                            .more {
                                opacity: 1;
                            }
                        }
                    }

                   

                    li.accepted {
                           .notification-icon {
                            margin-top: 10px;
                        }
                    }
                }

                .friend-requests {
                    .notification-friend {
                        display: block;
                    }

                    .chat-message-item {
                        font-size: 12px;
                    }
                }

                .notification-list li > * {
                    margin-bottom: 0px;
                    display: inline-block;
                    vertical-align: middle;
                }

                .notification-list {
                    margin-bottom: 0px;

                    .author-thumb {
                        height: 40px;
                        width: 40px;
                    }

                    .notification-event {
                        padding-left: 15px;
                    }

                    .notification-friend {
                        display: inline-block;
                        font-size: 13px;
                        margin-bottom: 0px;
                    }
                }

               
        
                .notification-icon {
                    margin-top: 0px;
                    color: #d7d9e5;
                    fill: #d7d9e5;
                    float: right;

                
                    .accept-request {
                        display: inline-block;
                        font-weight: 700px;
                        line-height: 1px;
                        text-align: center;
                        white-space: nowrap;
                        vertical-align: middle;
                        border: 1px solid transparent;
                        padding: 0.5rem;
                        font-size: 0.68rem;
                        border-radius: .25rem;
                        transition: all .2s ease-in-out;
                        background-color: #38a9ff;
                        color: #fff;
                        fill: #fff;
                        margin-left: 8px;

                        .icon-add.without-text {
                            margin-right: 0px;
                        }

                        .icon-add {
                            position: relative;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                    .request-del {
                        background-color: #9a9fbf;
                    }
                }
            }
        }

</style>

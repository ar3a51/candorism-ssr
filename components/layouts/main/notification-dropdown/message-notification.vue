<template>
<div class="tab-pane">
    <div class="mCustomScrollBar">
        <div class="ui-block-title ui-block-title-small">
            <a class="">chat/messages</a>
            <a class="">Mark All as Read</a>
            <a class="">Settings</a>
        </div>
        <ul class="notification-list chat-message">
            <li class="message-unread">
                <div class="author-thumb">
                    <img alt="author" src="img/avatar59-sm.jpg" data-v-5ffdde4c="" />
                </div>
                <div class="notification-event">
                    <a class="h6 notification-friend" href="#" data-v-5ffdde4c="">Diana Jameson</a>
                    <span class="chat-message-item" data-v-5ffdde4c="">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                    <span class="notification-date" data-v-5ffdde4c=""><time class="entry-date updated" datetime="2004-07-24T18:18" data-v-5ffdde4c="">4 hours ago</time></span>
                </div>
                <span class="notification-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="olymp-chat---messages-icon" data-v-5ffdde4c="">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" data-v-5ffdde4c="" />
                    </svg>
                </span>
                <div class="more">
                    <svg xmlns="http://www.w3.org/2000/svg" class="olymp-three-dots-icon" data-v-5ffdde4c=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon" data-v-5ffdde4c="" /></svg>
                </div>
            </li>
        </ul>
        <a class="view-all bg-purple" href="#">View All Messages</a>
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

    ul {
        padding: 0;
        margin-bottom: 0px;

        li {
            list-style: none;
            padding: 25px;
            border-bottom: 1px solid #e6ecf5;
            width: 100%;
            position: relative;

            margin-bottom: 0px;
            display: table;

              &:hover {
                cursor: pointer;
                div.more {
                    opacity: 1;
                }
            }

            svg {
                width: 22px;
                height: 20px;
            }

            div.author-thumb {
                height: 36px;
                width: 36px;
                display: table-cell;
                vertical-align: center;

                img {
                    border-radius: 100%;
                    overflow: hidden;
                    max-width: unset;
                    display: inline-block;
                }
            }

            div.notification-event {
                width: auto;
                max-width: 75%;
                font-size: 12px;
                padding-left: 15px;
                display: table-cell;
                vertical-align: center;

                a.notification-friend {
                    display: block;
                    font-size: 13px;
                }

                span.chat-message-item {
                    display: block;
                }
            }
            span.notification-icon {
                color: #d7d9e5;
                float: right;
                margin-top: 10px;
            }
            div.more {
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
        }

      

        li.message-unread {
          background-color: #f7f9fc;

          span.notification-icon {
              fill: #9a9fbf !important;
                color: #d7d9e5;
                float: right;
                margin-top: 10px;
          }
        }
    }
    /* a.view-all {
                    left: 0px;
                    width: 100%;
                    bottom: 0px;
                    z-index: 20;
                    padding: 20px;
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                    broder-radius: 0 0 5px 5px;
                    position: relative;
                    display: block;
                }

        .bg-blue {
            background-color: #38a9ff;
        }*/

     .mCustomScrollBar {
        overflow-y: auto !important;
        max-height: calc(-140px + 100vh);

        .ui-block-title {
            display: table;
            line-height: 1px;
            position: relative;
            width: 100%;
            border-bottom: 1px solid #e6ecf5;
            font-size: 10px;
            font-weight: bold;
        }
        .ui-block-title-small {
            padding: 10px 25px;
        }
        .ui-block-title > * {
            position: relative;
            display: table-cell;
            vertical-align: middle;

            
            
        }
     }
}
</style>

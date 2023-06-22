exports.onClientEntry = () => {
    /* eslint-disable */
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.crossOrigin = 'anonymous';
    script.onload = () => {
        jQuery( document ).ready(function($){
            const scroll_event = function(){
                $(window).scroll(()=>{
                    if(scroll_in_area($('#about'))){
                        aboutMe_chat_content_animation_setup();
                        $('#skipChatBtn').removeClass('hide');
                    } else {
                        $('#skipChatBtn').addClass('hide');
                    }

                    $('#experience .unAnimate').each((i, e)=>{
                        if(scroll_in_area($(e))){
                            $(e).removeClass('unAnimate').addClass('expAnimation');
                        }
                    });
                });
            }();
            
            const scroll_in_area = function (dom){
                let dom_y_location = dom.offset().top;
                let dom_y_height = dom.height();
                if( window.scrollY + window.innerHeight > dom_y_location && window.scrollY < dom_y_location + dom_y_height){
                    return true;
                }
                return false;
            }

            const aboutMe_chat_content_animation_setup = function (){
                if($('#about').hasClass('setup')) return;

                $('#about').addClass('setup');
                $('.chat-content').addClass('animation-fadeIn');
            }
        });
    };
    document.body.appendChild(script);
};
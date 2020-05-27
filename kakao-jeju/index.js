$(document).ready(function(){
	

function SliderBox1__init() {
    $(".side-btns>*").click(function () {
        var $this = $(this);

        var $slider = $this.parent().parent();

        var $current = $slider.find(">.slides>.active");
        $current.removeClass("active");

        var $post;

        var isLeft = $this.index() == 0;

        if (isLeft) {
            $post = $current.prev();

            if ($post.length == 0) {
                $post = $slider.find(">.slides>:last-child");
            }
        } else {
            $post = $current.next();

            if ($post.length == 0) {
                $post = $slider.find(">.slides>:first-child");
            }
        }

        $current.removeClass("active");
        $post.addClass("active");
        
        //좌우 버튼누를때 동그라미도 같이 움직이게 하기
        var index=$post.index();
        
        $slider.find('.page-btns>*.active').removeClass('active');
        $slider.find('.page-btns>*').eq(index).addClass('active');
    });
    
    //페이지 버튼들에게 클릭 이벤트를 건다.
    
    $('.page-btns>*').click(function(){
        var $this=$(this);
        
        $this.siblings('.active').removeClass('active');
        $this.addClass('active');
        
        var index=$this.index();
        
        // var $slider=$this.parent().parent();
         var $slider=$this.closest('.slider-box-1');
        
        $slider.find('>.slides>.active').removeClass('active');
        
        // $slider.find('>.slides>:nth-child('+(index+1)+')').addClass('active');
        $slider.find('>.slides>div').eq(index).addClass('active');
        
    });
    
    //3초에 한번씩 움직이기
//    setInterval(function(){
//        $('.slider-box-1>.side-btns>:last-child').click();
//    },3000);

}

SliderBox1__init();

});

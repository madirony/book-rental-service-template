var main = {
    init : function (){
        var _this = this;
        $('#rentalsubmit').on('click', function (){
            _this.save();
        });
        $('#donationsubmit').on('click', function (){
            _this.donate();
        });
    },
    save : function (){
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function (){
            alert('대여 신청되었습니다.');
            window.location.href='/';
        }).fail(function (error){
            alert(JSON.stringify(error));
            window.location.href='/';
        });
    },
    donate : function (){
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            classify : $('#donation_class option:selected').val(),
            content: $('#content').val()
        };
        $.ajax({
            type: 'POST',
            url: '/api/v1/rental',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function (){
            alert('기부 신청되었습니다.');
            window.location.href='/';
        }).fail(function (error){
            alert(JSON.stringify(error));
            window.location.href='/';
        });
    }
};
main.init();

//sold out
function soldOutAlert(){
    alert("모두 대여되거나 예약이 가득 찬 도서 입니다.\n다른 도서를 찾아주세요.");
}



//무한스크롤
var count = 0;
//스크롤 바닥 감지
window.onscroll = function (e){
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        count++;
        var addContent = '<div class="card mt-4"><p>'+count+'번째로 추가된 콘텐츠</p></div>';
        $('article').append(addContent);
    }
}

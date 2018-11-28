<div class="img-l"><img src="{{ asset('admn') }}/imgs/colya.png" alt="кока-коля"></div>
{{--<div class="strong-l">Дані щодо Вашого бронювання</div>--}}
<div class="hr-l"></div>
<div class="table-l">
    <div class="inner-l">

        {!! $email->content??'' !!}

        @if(!empty($excursion->token))
            {{ route('get-photo', $excursion->token) }}
        @endif

    </div>
</div>

<div class="footer-l">
    <div class="block-l">
        <em style="color: #8e8e8e">
            З радістю чекаємо Вас у гості
        </em>
        <p class="text-l">Ваша Coca-cola</p>
    </div>
    <div class="block-l">
        <em style="color: #3c3c3c">
            Найближчим часом Ми зв`яжемося з Вами, але якщо у Вас виникли додаткові питання Ви можете:
        </em>
    </div>
    <div class="block-l">
        <div class="inner-l">
            <div class="foot-l">
                <p class="strong-l" style="font-size: 22px">Зателефонувати</p>
                <p class="cola-l">+38 044 490 07 07</p>
                <a class="tel-l" href="tel:+38 044 490 07 07">ПОЗВОНИТИ</a>
            </div>
            <div class="foot-l">
                <p class="strong-l" style="font-size: 22px">Надіслати листа на почту</p>
                <p class="cola-l" style="color: #b7bec5; text-decoration: none;">ccbu@cchellenic.com</p>
                <a class="mail-l" href="mailto:ccbu@cchellenic.com">Надіслати листа »</a>
            </div>
        </div>
    </div>
    <div class="footer-out-l">Кока-Кола Беверіджиз Україна Лімітед</div>
</div>

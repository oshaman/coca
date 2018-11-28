<section id="map_cola" class="sec_7">
    <div id="map"></div>
    <div class="contact">
        <div class="sec_title">
            <span>{{ $screen->headings[0]??'' }}</span>
            <div class="fs_title">
                <h2>{{ $screen->headings[1]??'' }}</h2>
            </div>
        </div>
        <div class="contact-area">
            <div class="con_lan">
                <a href="https://www.google.com.ua/maps/dir/%D0%A7%D0%B5%D1%80%D0%BD%D0%B8%D0%B3%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,+%D0%9A%D0%B8%D0%B5%D0%B2,+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9A%D0%B8%D0%B5%D0%B2/%D0%9A%D0%9E%D0%9A%D0%90-%D0%9A%D0%9E%D0%9B%D0%90,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B7%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE+%D1%88%D0%BE%D1%81%D0%B5.+%D1%81%D0%BC%D1%82+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0+%D0%94%D0%B8%D0%BC%D0%B5%D1%80%D0%BA%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB./@50.5370498,30.6811514,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40d4daaa649ce095:0x99512ada45c60c6d!2m2!1d30.6303326!2d50.4598784!1m5!1m1!1s0x40d527ad86241deb:0x3ef448cf316dbfcc!2m2!1d30.8720487!2d50.611067!3e0" target="_blank">{{ $screen->headings[2]??'' }}</a>
            </div>
            <div class="con_tell">
                <a href="tel:{{ $screen->headings[3]??'' }}">{{ $screen->headings[3]??'' }}</a>
            </div>
            <div class="con_mail">
                <a href="mailto:{{ $screen->headings[4]??'' }}">{{ $screen->headings[4]??'' }}</a>
            </div>
        </div>
        <div class="contact-marsh">
            <h4>{{ $screen->headings[5]??'' }}</h4>
            <div class="marsh_">
                {!! $screen->content !!}
            </div>
        </div>
    </div>
</section>

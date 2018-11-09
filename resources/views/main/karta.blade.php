<section id="map_cola" class="sec_7">
    <div id="map"></div>
    <div class="contact">
        <div class="sec_title">
            <span>{{ $screen->headings[0]??'' }}</span>
            <h2>{{ $screen->headings[1]??'' }}</h2>
        </div>
        <div class="contact-area">
            <div class="con_lan">
                <a href="https://www.google.com.ua/maps/place/%D0%9A%D0%BE%D0%BA%D0%B0-%D0%9A%D0%BE%D0%BB%D0%B0/@50.611067,30.86986,17z/data=!3m1!4b1!4m5!3m4!1s0x40d527ad86241deb:0x3ef448cf316dbfcc!8m2!3d50.611067!4d30.8720487" target="_blank">{{ $screen->headings[2]??'' }}</a>
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
                <h5>{{ $screen->headings[6]??'' }}</h5>
                <div class="marsh_pos">
                    <span>{{ $screen->headings[7]??'' }}</span>
                    <i></i>
                    <span>{{ $screen->headings[8]??'' }}</span>
                </div>
            </div>
            <div class="marsh_">
                <h5>{{ $screen->headings[9] }}</h5>
                <div class="marsh_pos">
                    <span>{{ $screen->headings[10]??'' }}</span>
                    <i></i>
                    <span>{{ $screen->headings[11]??'' }}</span>
                </div>
            </div>
        </div>
    </div>
</section>

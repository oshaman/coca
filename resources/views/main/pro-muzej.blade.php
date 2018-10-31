<section id="about" class="sec_2">
    <div class="container">
        <div class="about-area">
            <div class="about-img" data-video="{{ $screen->slider[0]->video }}">
                <img src="{{ $screen->slider[0]->getImage() }}" alt="{{ $screen->slider[0]->alt }}" title="{{ $screen->slider[0]->title }}">
            </div>
            <div class="about-content">
                <div class="sec_title">
                    <span>{{ $screen->headings[0]??'' }}</span>
                    <h2>{{ $screen->headings[1]??'' }}</h2>
                    {!! $screen->content !!}
                </div>
                <div class="sec_title_bottom">
                    <p>{{ $screen->headings[2]??'' }}</p>
                    <div class="sec_about_img">
                        <img src="{{ asset('assets') }}/img/icon/about_1.svg" alt="">
                        <img src="{{ asset('assets') }}/img/icon/about_2.svg" alt="">
                        <img src="{{ asset('assets') }}/img/icon/about_3.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

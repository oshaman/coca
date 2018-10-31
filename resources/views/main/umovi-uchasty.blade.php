<section id="participation" class="sec_3">
    <div class="container">
        <div class="participation-area">
            <div class="participation-content">
                <div class="sec_title">
                    <span>{{ $screen->headings[0]??'' }}</span>
                    <h2>{{ $screen->headings[1]??'' }}</h2>
                    {!! $screen->content !!}
                </div>


            </div>
            <div class="participation-block">
                <div class="block_par">
                    <div class="block_head">
                        <div class="block_img_">
                            <img src="{{ asset('assets') }}/img/icon/block_head_1.svg" alt="">
                        </div>
                        <p>{{ $screen->headings[2]??'' }}</p>
                    </div>
                    <div class="block_number">
                        <p>01</p>
                    </div>
                </div>
                <div class="block_par">
                    <div class="block_head">
                        <div class="block_img_">
                            <img src="{{ asset('assets') }}/img/icon/block_head_2.svg" alt="">
                        </div>
                        <p>{{ $screen->headings[3]??'' }}</p>
                    </div>
                    <div class="block_number">
                        <p>02</p>
                    </div>
                </div>
                <div class="block_par">
                    <div class="block_head">
                        <div class="block_img_">
                            <img src="{{ asset('assets') }}/img/icon/block_head_3.svg" alt="">
                        </div>
                        <p>{{ $screen->headings[4]??'' }}</p>
                    </div>
                    <div class="block_number">
                        <p>03</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

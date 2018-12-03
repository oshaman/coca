<section class="sec_4">
    <div class="container">
        <div class="block_sec4">
            <div class="left_sec4">
                <div class="sec_4_img event_coka_v">
                    <img data-src="{{ $screen->slider[0]->getImage() }}" alt="{{ $screen->slider[0]->alt }}" title="{{ $screen->slider[0]->title }}">
                </div>
                <div class="sec_4_text">
                    <p>{{ $screen->slider[0]->description }}</p>
                </div>
            </div>
            <div class="right_sec4">
                <div class="sec_4_text">
                    <p>{{ $screen->slider[1]->description }}</p>
                </div>
                <div class="sec_4_img event_coka_e">
                    <img data-src="{{ $screen->slider[1]->getImage() }}" alt="{{ $screen->slider[1]->alt }}" title="{{ $screen->slider[1]->title }}">
                </div>

            </div>
        </div>
    </div>
</section>

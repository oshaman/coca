<section class="sec_1">
    <div class="container">
        <div class="sec_title">
            <h1>{{ $screen->headings[0]??'' }} <span>{{ $screen->headings[1]??'' }}</span></h1>
            {!! $screen->content !!}
            <div class="button_callback">
                <a href="#form">Записатись</a>
            </div>
        </div>

    </div>
    <div class="slider_top">
        <div class="slider_top_img">
            @forelse($screen->slider as $slide)
                <img src="{{ $slide->getImage() }}" alt="{{ $slide->alt }}" title="{{ $slide->title }}" @if($loop->first) class="active" @endif>
            @empty
            @endforelse
        </div>
        <div class="nav_slider_top">
            <div class="nav-control nav-control_prev"></div>
            <div class="reviews-dots"></div>
            <div class="nav-control nav-control_next"></div>
        </div>
    </div>
</section>

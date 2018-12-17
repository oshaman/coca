<section id="about" class="sec_2">
    <div class="container">
        <div class="about-area">
            <div class="about-img" data-video="{{ $screen->slider[0]->video }}">
                <img data-src="{{ $screen->slider[0]->getImage() }}" alt="{{ $screen->slider[0]->alt }}"
                     title="{{ $screen->slider[0]->title }}">
            </div>
            <div class="about-content">
                <div class="sec_title">
                    <span>{{ $screen->headings[0]??'' }}</span>
                    <div class="fs_title">
                        <h2>{{ $screen->headings[1]??'' }}</h2>
                    </div>
                    {!! $screen->content !!}
                </div>
                <div class="sec_title_bottom">
                    <p>{{ $screen->headings[2]??'' }}</p>
                    <div class="sec_about_img">
                        @forelse($screen->slider as $slide)
                            @if(0 == $loop->index)
                                @continue
                            @endif
                                <div class="img___slider">
                                    <img src="{{ $slide->getImage() }}" alt="{{ $slide->alt }}"
                                         title="{{ $slide->title }}">
                                </div>

                        @empty
                        @endforelse
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

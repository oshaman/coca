<section id="gallery" class="sec_6">
    <div class="container">
        <div class="gallery-area">
            <div class="gallery_title">
                <div class="sec_title">
                    <span>Щаслива</span>
                    <h2>Галерея</h2>
                </div>
                <div class="slider_nav">
                    <div class="nav-control nav-control_prev"></div>
                    <div class="nav-control nav-control_next"></div>
                </div>
            </div>
            <div class="gallery_slider">
                @forelse($screen->slider as $slide)

                    <div class="gallery_block"
                         data-id="@if(3>$loop->iteration) {{ $loop->iteration }} @else {{ $loop->iteration+1 }} @endif">

                        @if(empty($slide->video))
                            <img src="{{ $slide->getImage() }}" alt="{{ $slide->alt }}" title="{{ $slide->title }}">
                        @else
                            <div class="video_galegy" data-video="{{ $slide->video }}"></div>
                        @endif

                        <p>{{ $slide->description }}</p>
                    </div>

                    @if(2==$loop->iteration)
                        <div class="gallery_block gallery_coca" data-id="3">
                            <img src="{{ asset('assets') }}/img/icon/galler_3.jpg">

                            {!! $screen->content !!}
                        </div>
                    @endif


                @empty
                @endforelse
            </div>
        </div>
    </div>
</section>

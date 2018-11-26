<section id="participation" class="sec_3">
    <div class="container">
        <div class="participation-area">
            <div class="participation-content">
                <div class="sec_title">
                    <span>{{ $screen->headings[0]??'' }}</span>
                    <div class="fs_title">
                        <h2>{{ $screen->headings[1]??'' }}</h2>
                    </div>
                    {!! $screen->content !!}
                </div>


            </div>
            <div class="participation-block" id="participation-block">
                <div class="participation_umovi">
                    @forelse($screen->slider as $slide)

                        <div class="block_par">
                            <div class="block_head">
                                <div class="block_img_">
                                    <img data-src="{{ $slide->getImage() }}" alt="{{ $slide->alt }}"
                                         title="{{ $slide->title }}">
                                </div>
                                <p>{{ $slide->description??'' }}</p>
                            </div>
                            <div class="block_number">
                                <p>0{{ $loop->iteration }}</p>
                            </div>
                        </div>

                    @empty
                    @endforelse
                </div>


            </div>
        </div>
    </div>
</section>

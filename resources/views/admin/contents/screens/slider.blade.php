@if(!empty($screen) && $screen->slider->isNotEmpty())
    @forelse($screen->slider as $pic)
        <div class="sl-block">

            @if(empty($museum))
                <p>СЛАЙД {{ $loop->iteration }}</p>
            @else
                @if(0==$loop->index)
                    <p>Фото</p>
                @else
                    <p>Партнер {{ $loop->iteration - 1 }}</p>
                @endif
            @endif

            <div class="del-slide" data-url="{{ route('admin.slide.delete', $pic->id) }}">
                <img src="{{ asset('admn') }}/imgs/del-slide.svg" alt="-">
            </div>
            {{ Form::hidden("slider[$loop->index][id]", $pic->id) }}
            <div class="thumbnail">
                {{ Html::image($pic->getImage(), 'a picture', array('class' => 'img-thumbnail')) }}
            </div>
            <div>
                {!! Form::text("slider[$loop->index][video]", $pic->video??null,
                                ['class'=>'form-control', 'id'=>"video$screen->slug$loop->iteration"]) !!}
                <label for="video{{ $screen->slug.$loop->iteration }}">Відео</label>
            </div>
            <div>
                <input type="text" disabled="" name="image" class="og-image-load">
                {!! Form::file("slider[$loop->index][]", ['accept'=>'image/*', 'style'=>'display: none', 'id'=>"image$screen->slug$loop->iteration"]) !!}
                <label for="image{{ $screen->slug.$loop->iteration }}">Фото для слайдера, формат jpg,png,jpeg,gif, не більше 2560 Кb</label>
            </div>
            <div>
                {!! Form::text("slider[$loop->index][alt]", $pic->alt??null,
                                       ['class'=>'form-control', 'id'=>"alt$screen->slug$loop->iteration"]) !!}
                <label for="alt{{ $screen->slug.$loop->iteration }}">Alt</label>
            </div>
            <div>

                {!! Form::text("slider[$loop->index][title]", $pic->title??null,
                                [ 'class'=>'form-control', 'id'=>"title$screen->slug$loop->iteration"]) !!}
                <label for="title{{ $screen->slug.$loop->iteration }}">Title</label>
            </div>

            <div>
                {!! Form::text("slider[$loop->index][description]", $pic->description??null,
                                ['class'=>'form-control', 'id'=>"description$screen->slug$loop->iteration"]) !!}
                <label for="description{{ $screen->slug.$loop->iteration }}">Description</label>
            </div>
        </div>

    @empty
        <h4>Cлайди відсутні</h4>
    @endforelse
@endif

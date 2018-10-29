@if(!empty($screen) && $screen->slider->isNotEmpty())

    @forelse($screen->slider as $pic)
        <div class="sl-block">
            <div class="del-slide" data-url="{{ route('admin.slide.delete', $pic->id) }}">
                <img src="{{ asset('admn') }}/imgs/del-slide.svg" alt="-">
            </div>
        {{ Form::hidden("slider[$loop->index][id]", $pic->id) }}
        <div>
            {!! Form::text("slider[$loop->index][video]", $pic->video??null,
                            ['class'=>'form-control', 'id'=>"video$screen->slug$loop->iteration"]) !!}
            <label for="video{{ $screen->slug.$loop->iteration }}">Відео</label>
        </div>

        <div class="thumbnail">
            {{ Html::image($pic->getImage(), 'a picture', array('class' => 'img-thumbnail', 'style'=>'width:auto; height: 5.6vh;')) }}
        </div>

        <div>
            <input type="text" disabled="" name="image" class="og-image-load">
            {!! Form::file("slider[$loop->index][]", ['accept'=>'image/*', 'style'=>'display: none', 'id'=>"image$screen->slug$loop->iteration"]) !!}
            <label for="image{{ $screen->slug.$loop->iteration }}">Фото для слайдера</label>
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

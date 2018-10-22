@if(!empty($screen) && $screen->slider->isNotEmpty())
    @forelse($screen->slider as $pic)
        {{ Form::label('video', 'Відео') }}
        {{ Form::hidden("slider[$loop->index][id]", $pic->id) }}
        <div class="">
            <div class="col-lg-6">
                {!! Form::text("slider[$loop->index][video]", $pic->video??null,
                                ['placeholder'=>'video', 'class'=>'form-control']) !!}
            </div>
        </div>
        <div class="thumbnail">
            {{ Html::image($pic->getImage(), 'a picture', array('class' => 'img-thumbnail', 'style'=>'width:50px')) }}
        </div>
        {{ Form::label('slider', 'Фото для слайдера') }}
        <div>
            {!! Form::file("slider[$loop->index][]", ['accept'=>'image/*', 'class'=>'form-control']) !!}
            <br>
            {{ Form::label('alt', 'Параметры зображення') }}
            <div class="">
                <div class="col-lg-6">
                    {!! Form::text("slider[$loop->index][alt]", $pic->alt??null,
                                    ['placeholder'=>'Alt', 'class'=>'form-control']) !!}
                </div>
                <div class="col-lg-6">
                    {!! Form::text("slider[$loop->index][title]", $pic->title??null,
                                    ['placeholder'=>'Title', 'class'=>'form-control']) !!}
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            {!! Form::text("slider[$loop->index][description]", $pic->description??null,
                            ['placeholder'=>'description', 'class'=>'form-control']) !!}
        </div>
    @empty
        <h4>Cлайди відсутні</h4>
    @endforelse
@endif

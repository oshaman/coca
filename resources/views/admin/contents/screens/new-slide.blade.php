<div class="new-slide" style="display: none">
    {{ Form::label('video', 'Відео') }}
    {{ Form::hidden("slider[1000][id]", null) }}
    <div class="">
        <div class="col-lg-6">
            {!! Form::text("slider[1000][video]", null,
                            ['placeholder'=>'video', 'class'=>'form-control']) !!}
        </div>
    </div>
    {{ Form::label('slider', 'Фото для слайдера') }}
    <div>
        {!! Form::file("slider[1000][0]", ['accept'=>'image/*', 'class'=>'form-control']) !!}
        <br>
        {{ Form::label('alt', 'Параметры зображення') }}
        <div class="">
            <div class="col-lg-6">
                {!! Form::text("slider[1000][alt]", null,
                                ['placeholder'=>'Alt', 'class'=>'form-control']) !!}
            </div>
            <div class="col-lg-6">
                {!! Form::text("slider[1000][title]", null,
                                ['placeholder'=>'Title', 'class'=>'form-control']) !!}
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        {!! Form::text("slider[1000][description]", null,
                        ['placeholder'=>'description', 'class'=>'form-control']) !!}
    </div>
</div>

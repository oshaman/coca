<div class="new-slide" style="display: none">
    <div class="sl-block">
        <div class="del-slide"><img src="{{ asset('admn') }}/imgs/del-slide.svg" alt="-"></div>
        {{--{{ Form::label('video', 'Відео') }}--}}
        {{ Form::hidden("slider[1000][id]", null) }}
        <div>

            {!! Form::text("slider[1000][video]", null,
                            ['class'=>'form-control', 'id'=>'pole1']) !!}
            {{ Form::label('pole1', 'Відео') }}
        </div>
        <div>
            <input type="text" disabled="" name="image" class="og-image-load">
            {!! Form::file("slider[1000][0]", ['accept'=>'image/*', 'id'=>'200', 'style'=>'display:none']) !!}
            {{--{{ Form::label('100', 'Фото для слайдера') }}--}}
            <label for="200">Фото для слайдера</label>
        </div>
        <div>
            {!! Form::text("slider[1000][alt]", null,
                            ['class'=>'form-control', 'id'=>'300']) !!}
            {{ Form::label('300', 'Alt') }}
        </div>
        <div>
            {!! Form::text("slider[1000][title]", null,
                            ['class'=>'form-control', 'id'=>'400']) !!}
            {{ Form::label('400', 'Title') }}
        </div>
        <div>
            {!! Form::text("slider[1000][description]", null,
                            ['class'=>'form-control', 'id'=>'500']) !!}
            {{ Form::label('500', 'Description') }}
        </div>
    </div>
</div>

<form class="form-trip" action="{{ route('admin.calendar.store') }}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="form-trip-block">
        <p>Виберіть дату та час</p>
        <select name="trip-month" id="select-month" class="custom-select sources">
            <option value="{{ \Carbon\Carbon::now()->month }}" selected>{{ \Carbon\Carbon::now()->format('F') }}</option>
            <option value="{{ \Carbon\Carbon::now()->addMonth()->month }}">
                {{ \Carbon\Carbon::now()->addMonth()->format('F') }}
            </option>
        </select>
        <select name="trip-day" id="select-day" class="custom-select sources">
            @for($i=\Carbon\Carbon::now()->addDay()->day;$i<=\Carbon\Carbon::now()->daysInMonth; $i++)
                <option value="{{$i}}" @if($i==\Carbon\Carbon::now()->addDay()->day) selected @endif>{{$i}}</option>
            @endfor
        </select>
        <select name="trip-day" id="select-day-2" class="custom-select sources" style="display: none">
            @for($i=\Carbon\Carbon::now()->startOfMonth()->addMonth()->day;$i<=\Carbon\Carbon::now()->addMonth()->daysInMonth; $i++)
                <option value="{{$i}}" @if($i==\Carbon\Carbon::now()->startOfMonth()->addMonth()->day) selected @endif>{{$i}}</option>
            @endfor
        </select>
        <select name="interval" id="select-time" class="custom-select sources">
            @foreach(config('settings.time_intervals') as $interval)
                @if($loop->first) @continue @endif
                <option value="{{ $loop->index }}" @if(1 == $loop->index) selected @endif>{{ $interval }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-trip-info">
        <p>Інформація щодо екскурсії</p>
        <div>
            {{ Form::text('name', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-name']) }}
            <label for="trip-name">Ім’я та Прізвище</label>
        </div>
        <div>
            {{ Form::text('phone', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-phone']) }}
            <label for="trip-phone">Телефон</label>
        </div>
        <div>
            {{ Form::text('email', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-email', 'type'=>'trip-email']) }}
            <label for="trip-email">Пошта</label>
        </div>
        <div>
            {{ Form::text('position', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-pos']) }}
            <label for="trip-pos">Посада</label>
        </div>
        <div>
            {{Form::selectRange('people', 4, 32, null, ['id'=>'position', 'class'=>"custom-select sources"])}}
            <label for="position">Кількість людей</label>
        </div>
        <div>
            {{ Form::text('institution', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-school']) }}
            <label for="trip-school">Назва закладу</label>
        </div>

    </div>
    <div class="form-trip-file">
        <div>
            <div class="trip-photo">Фото документа
                <div class="tooltip"><img src="{{ asset('admn') }}/imgs/Subtract.svg" alt="1">
                    <span class="tooltiptext">Підказка</span>
                </div>
            </div>
            <input id="upload-doc" type="file" name="file">
            <label for="upload-doc" class="btn btn-grey upload-doc">Завантажити</label>
            <input type="text" id="filename" class="filename" disabled>
        </div>
        {{--<div class="trip-check">
            <input type="checkbox" id="cbtest"/>
            <label for="cbtest" class="check-box"></label>
            <label for="cbtest" class="check-text">У мене немає документу</label>
            <textarea name="pole" class="nodoc" cols="num" rows="num" placeholder="Тому що......"></textarea>
        </div>--}}

        <div class="progress-bar">
            <dl class="radio-list-left">
                <dd>
                    <input type="radio" name="pq1" id="pq1-1" value="1-1">
                    <label for="pq1-1">Заброньовано</label>
                </dd>
                <dd>
                    <input type="radio" name="pq1" id="pq1-2" value="1-2">
                    <label for="pq1-2">Очікує документ</label>
                </dd>
                <dd>
                    <input type="radio" name="pq1" id="pq1-3" value="1-3">
                    <label for="pq1-3">Підтвердженно</label>
                </dd>
            </dl>

            {{--<div class="bar-circle">--}}
                {{--<div class="circle circle1 active"></div>--}}
                {{--<div class="circle circle2"></div>--}}
                {{--<div class="circle circle3"></div>--}}
                {{--<hr class="active-top">--}}
                {{--<hr class="active-bottom">--}}
            {{--</div>--}}
            {{--<div class="bar-text">--}}
                {{--<p class="active">Заброньовано</p>--}}
                {{--<p class="p-2">Очікує документ</p>--}}
                {{--<p class="p-3">Підтвердженно</p>--}}
            {{--</div>--}}
        </div>
    </div>
    <div class="trip-buttons">
        <button type="submit" class="btn">Створити</button>
        <div class="btn btn-white">
            Видалити
        </div>
    </div>

</form>

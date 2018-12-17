<form class="form-trip" action="{{ route('admin.calendar.store') }}" method="post" enctype="multipart/form-data">
    @method('put')
    @csrf
    <div class="form-trip-block">
        <p>Виберіть дату та час</p>
        <select name="trip-month" id="select-month-edit" class="custom-select sources">
            @if($currentMonthHasAvailableDays)
                <option value="{{ \Carbon\Carbon::now()->month }}"
                        selected>{{ \Carbon\Carbon::now()->format('F') }}</option>
            @endif
            <option value="{{ \Carbon\Carbon::now()->addMonth()->month }}" @if(!$currentMonthHasAvailableDays) selected @endif>
                {{ \Carbon\Carbon::now()->addMonthNoOverflow()->format('F') }}
            </option>
        </select>
        @if($currentMonthHasAvailableDays)
            <select name="trip-day" id="select-day-edit" class="custom-select sources del-name select-day days-select">
                @for($i=\Carbon\Carbon::now()->addDay()->day;$i<=\Carbon\Carbon::now()->daysInMonth; $i++)
                    <option value="{{$i}}" @if($i==\Carbon\Carbon::now()->addDay()->day) selected @endif>{{$i}}</option>
                @endfor
            </select>
        @endif
        <select name="trip-day" @if($currentMonthHasAvailableDays) id="select-day-2-edit" @else id="select-day-edit" @endif  class="custom-select sources days-select del-name @if($currentMonthHasAvailableDays) select-day-2 @else select-day @endif" @if($currentMonthHasAvailableDays) style="display: none" @endif>
            @for($i=\Carbon\Carbon::now()->startOfMonth()->addMonthNoOverflow()->day;$i<=\Carbon\Carbon::now()->addMonthNoOverflow()->daysInMonth; $i++)
                <option value="{{$i}}"
                        @if($i==\Carbon\Carbon::now()->startOfMonth()->addMonthNoOverflow()->day) selected @endif>{{$i}}</option>
            @endfor
        </select>
        <select name="interval" id="select-time-edit" class="custom-select sources">
            @foreach(config('settings.time_intervals') as $interval)
                @if($loop->first) @continue @endif
                <option value="{{ $loop->index }}" @if(1 == $loop->index) selected @endif>{{ $interval }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-trip-info">
        <p>Інформація щодо екскурсії</p>
        <div>
            {{ Form::text('name', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-name-edit']) }}
            <label for="trip-name-edit">Ім’я та Прізвище</label>
        </div>
        <div>
            {{ Form::text('phone', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-phone-edit']) }}
            <label for="trip-phone-edit">Телефон</label>
        </div>
        <div>
            {{ Form::text('email', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-email-edit', 'type'=>'trip-email-edit']) }}
            <label for="trip-email-edit">Пошта</label>
        </div>
        <div>
            {{ Form::text('position', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-pos-edit']) }}
            <label for="trip-pos-edit">Посада</label>
        </div>
        <div>
            {{Form::selectRange('people', 4, 32, null, ['id'=>'position-edit', 'class'=>"custom-select sources"])}}
            <label for="position-edit">Кількість людей</label>
        </div>
        <div>
            {{ Form::text('institution', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-school-edit']) }}
            <label for="trip-school-edit">Назва закладу</label>
        </div>

    </div>
    <div class="form-trip-file">
        <div>
            <div class="trip-photo">Фото документа
                <div class="tooltip"><img src="{{ asset('admn') }}/imgs/Subtract.svg" alt="1">
                    <span class="tooltiptext">Підказка</span>
                </div>
            </div>
            <input id="update-doc" type="file" name="file">
            <label for="update-doc" class="btn btn-grey upload-doc">Завантажити</label>
            <input type="text" id="update-filename" class="filename" disabled>
        </div>

        {{--Групповое фото--}}
        <div>
            <div class="trip-photo">Групповое фото
                <div class="tooltip"><img src="{{ asset('admn') }}/imgs/Subtract.svg" alt="1">
                    <span class="tooltiptext">Підказка</span>
                </div>
            </div>
            <input id="upload-photo" type="file" name="photo">
            <label for="upload-photo" class="btn btn-grey upload-doc">Завантажити</label>
            <input type="text" id="photo-filename" class="filename" disabled>
            {{--{!! Form::textarea('comment') !!}--}}
            {{--{!! Form::textarea('comments') !!}--}}
        </div>
        {{--Групповое фото--}}


        <div class="progress-bar">
            <dl class="radio-list-left">
                <dd>
                    <input type="radio" name="status" id="pq1-1" value="2">
                    <label for="pq1-1">Реєстрація</label>
                </dd>
                <dd>
                    <input type="radio" name="status" id="pq1-2" value="3">
                    <label for="pq1-2">Заброньовано</label>
                </dd>
                <dd>
                    <input type="radio" name="status" id="pq1-3" value="4">
                    <label for="pq1-3">Підтверджено</label>
                </dd>
            </dl>
        </div>
    </div>
    <div class="trip-buttons">
        <button type="submit" class="btn">Редагувати</button>
        <div class="btn btn-white delete-excur">
            Видалити
        </div>
    </div>

</form>

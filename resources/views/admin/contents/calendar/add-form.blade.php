<form class="form-trip" action="{{ route('admin.calendar.store') }}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="form-trip-block">
        <p>Виберіть дату та час</p>
        <select name="trip-month" id="select-month-add" class="custom-select sources">
            @if($currentMonthHasAvailableDays)
                <option value="{{ \Carbon\Carbon::now()->month }}"
                        selected>{{ \Carbon\Carbon::now()->format('F') }}</option>
            @endif
            <option value="{{ \Carbon\Carbon::now()->addMonth()->month }}" @if(!$currentMonthHasAvailableDays) selected @endif>
                {{ \Carbon\Carbon::now()->addMonthNoOverflow()->format('F') }}
            </option>
        </select>
        @if($currentMonthHasAvailableDays)
            <select name="trip-day" id="select-day-add" class="custom-select sources del-name select-day days-select">
                @for($i=\Carbon\Carbon::now()->addDay()->day;$i<=\Carbon\Carbon::now()->daysInMonth; $i++)
                    <option value="{{$i}}" @if($i==\Carbon\Carbon::now()->addDay()->day) selected @endif>{{$i}}</option>
                @endfor
            </select>
        @endif
        <select name="trip-day" @if($currentMonthHasAvailableDays) id="select-day-add-2" @else id="select-day-add" @endif  class="custom-select sources del-name days-select @if($currentMonthHasAvailableDays) select-day-2 @else select-day @endif" @if($currentMonthHasAvailableDays) style="display: none" @endif>
            @for($i=\Carbon\Carbon::now()->startOfMonth()->addMonthNoOverflow()->day;$i<=\Carbon\Carbon::now()->addMonthNoOverflow()->daysInMonth; $i++)
                <option value="{{$i}}"
                        @if($i==\Carbon\Carbon::now()->startOfMonth()->addMonthNoOverflow()->day) selected @endif>{{$i}}</option>
            @endfor
        </select>
        <select name="interval" id="select-time-add" class="custom-select sources">
            @foreach(config('settings.time_intervals') as $interval)
                @if($loop->first) @continue @endif
                <option value="{{ $loop->index }}" @if(1 == $loop->index) selected @endif>{{ $interval }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-trip-info">
        <p>Інформація щодо екскурсії</p>
        <div>
            {{ Form::text('name', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-name-add']) }}
            <label for="trip-name-add">Ім’я та Прізвище</label>
        </div>
        <div>
            {{ Form::text('phone', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-phone-add']) }}
            <label for="trip-phone-add">Телефон</label>
        </div>
        <div>
            {{ Form::text('email', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-email-add', 'type'=>'trip-email']) }}
            <label for="trip-email-add">Пошта</label>
        </div>
        <div>
            {{ Form::text('position', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-pos-add']) }}
            <label for="trip-pos-add">Посада</label>
        </div>
        <div>
            {{Form::selectRange('people', 4, 32, null, ['id'=>'position-add', 'class'=>"custom-select sources"])}}
            <label for="position-add">Кількість людей</label>
        </div>
        <div>
            {{ Form::text('institution', null, ['class'=>"form-control", 'required'=>'required', 'id'=>'trip-school-add']) }}
            <label for="trip-school-add">Назва закладу</label>
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
        <div class="progress-bar">
            <dl class="radio-list-left">
                <dd>
                    <input type="radio" name="status" id="pq1-1-add" value="2">
                    <label for="pq1-1-add">Реєстрація</label>
                </dd>
                <dd>
                    <input type="radio" name="status" id="pq1-2-add" value="3">
                    <label for="pq1-2-add">Заброньовано</label>
                </dd>
                <dd>
                    <input type="radio" name="status" id="pq1-3-add" value="4">
                    <label for="pq1-3-add">Підтверджено</label>
                </dd>
            </dl>
        </div>
    </div>
    <div class="trip-buttons">
        <button type="submit" class="btn">Створити</button>
    </div>
</form>

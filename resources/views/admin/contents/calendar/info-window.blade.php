<div class="info-window @if((null != $isDisabled)) unactive @endif">
    <h5>
        <p class="day">{{ \Carbon\Carbon::createFromFormat('Y-m-d', $date)->day }} число</p>
        Інформація екскурсій
        {{--<div class="toggle-button-cover">--}}
            <div class="button-cover">
                <div class="button r" id="button-1">
                    <input type="checkbox" @if((null != $isDisabled)) checked @endif name="foo" class="checkbox vkl" data-val="{{ \Carbon\Carbon::createFromFormat('Y-m-d', $date)->format('Y-m-d') }}">
                    <div class="knobs"></div>
                    <div class="layer"></div>
                    <div class="unactive"></div>
                </div>
            </div>
        {{--</div>--}}
    </h5>

    @foreach($result as $item)
        @if(null == $item)
            <div class="info-block-add" data-interval="{{ $loop->iteration }}" data-day="{{ \Carbon\Carbon::createFromFormat('Y-m-d', $date)->day }}" data-month="{{ \Carbon\Carbon::createFromFormat('Y-m-d', $date)->month }}">
                <div class="info-after-add"></div>
                <div class="header-note">
                    <div class="time-calendar time-free">
                        <span>Вільний</span>
                        <span>{{ config('settings.time_intervals.'.$loop->iteration) }}</span>
                    </div>
                </div>
            </div>
        @else
            <div class="info-block" data-id="{{ $item->id }}" data-name="{{ $item->name }}" data-phone="{{ $item->phone }}" data-email="{{ $item->email }}" data-institution="{{ $item->institution }}" data-position="{{ $item->position }}" data-people="{{ $item->people }}" data-status="{{ $item->status }}" data-day="{{ $item->current_day }}" data-month="{{ $item->current_month }}" data-interval="{{ $item->interval }}" data-current="{{ $item->isCurrentMonth() }}">
                <div class="info-after"></div>
                <div class="header-note">
                    <div class="time-calendar {{ config('settings.status_class.'.$item->status) }}">
                        <span>{{ config('settings.statuses.'.$item->status) }}</span>
                        <span>{{ config('settings.time_intervals.'.$loop->iteration) }}</span>
                    </div>
                    <div class="info-open">Відкрити</div>
                </div>
                <div class="info-note">
                    <div>
                        <p class="info-people">{{ $item->people }} людей</p>
                        <p class="info-institution">{{ $item->institution }}</p>
                        <p class="info-document">
                            @if($item->file)
                                <a href="{{ URL::to( '/assets/images/members/' . $item->file)  }}" target="_blank">{{ $item->file }}</a>
                            @endif
                        </p>
                        <p class="info-document">
                            @if($item->photo)
                                <a href="{{ URL::to( '/assets/images/group-photos/' . $item->photo)  }}" target="_blank">{{ $item->photo }}</a>
                            @endif
                        </p>
                    </div>
                    <div>
                        <p class="info-number">{{ $item->phone }}</p>
                        <p class="info-name">{{ $item->name }}</p>
                        <p class="info-position">{{ $item->position }}</p>
                        <p class="info-mail">{{ $item->email }}</p>
                    </div>
                    <div class="btn">Редагувати</div>
                </div>
            </div>
        @endif
    @endforeach

</div>

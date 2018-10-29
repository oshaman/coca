<td class="@if($currentDay->month == $today->month) pres-month @else prev-month @endif" data-date="{{ $currentDay->format('Y-m-d') }}">
    <div class="td-wrap"></div>
    <p class="day">{{ $currentDay->day }} число</p>

    @for ($i = 1; $i < 7; $i++)
        @if($excursion = $excursions->where('interval', $i)->where('current_day', $currentDay->day)->first())
            <div class="time-calendar {{ $excursion->status_class }}">
                <span>{{ config('settings.statuses.'.$excursion->status) }}</span>
                <span>{{ config('settings.time_intervals.'.$i) }}</span>
            </div>
        @else
            <div class="time-calendar time-free">
                <span>Вільний</span>
                <span>{{ config('settings.time_intervals.'.$i) }}</span>
            </div>
        @endif
    @endfor
</td>

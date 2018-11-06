<main>
    <div class="top-main">
        <h1>Редагування контенту</h1>
        @include('admin.logout')
    </div>
    <div class="rubrics">
        @forelse($bots as $bot)
            <div class="rubric @if(1 == $loop->iteration) active @endif">
                <div class="rub-num">
                    <p>#{{ $loop->iteration }}</p>
                    <p>перший блок</p>
                </div>
                <div class="rub-name">{{ $bot->title }}</div>
                <div class="rub-text">Його текстова информація. Також что буде якщо її немає?</div>
            </div>
        @empty
        @endforelse
    </div>
    <div class="tiny-content">
        <div class="under-back"></div>
        <div class="nacc scrollbar">
            @forelse($bots as $bot)
                <div class="nacc-content @if(1 == $loop->iteration) active @endif">
                    <h3>{{ $bot->title }} <a href="javascript:void(0)">Переглянути</a></h3>
                    <form action="{{ route('admin.bot.update', $bot->id) }}" class="form-content" method="post">
                        @method('PUT')
                        @csrf

                        {!! Form::textarea('question', $bot->question??null, ['class'=>'area']) !!}
                        {!! Form::textarea('answer', $bot->answer??null, ['class'=>'area']) !!}
                        <div style="width: 100%">
                            <button type="submit" class="btn btn-red">зберегти</button>
                        </div>
                    </form>
                </div>
            @empty
            @endforelse
        </div>
    </div>
</main>
<div class="pops-alert">

</div>

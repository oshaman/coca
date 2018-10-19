<main>
    <div class="top-main">
        <h1>Редагування контенту</h1>
        @include('admin.logout')
    </div>
    <div class="rubrics scrollbar">
        @forelse($screens as $screen)
            <div class="rubric @if(1 == $loop->iteration) active @endif">
                <div class="rub-num">
                    <p>#{{ $loop->iteration }}</p>
                    <p>перший блок</p>
                </div>
                <div class="rub-name">{{ $screen->title }}</div>
                <div class="rub-text">Його текстова информація. Також что буде якщо її немає?</div>
            </div>
        @empty
        @endforelse
    </div>
    <div class="tiny-content">
        <div class="under-back"></div>
        <div class="nacc">
            @forelse($screens as $screen)
                @include('admin.contents.screens.'.$screen->slug, $screen)
            @empty
            @endforelse
        </div>

    </div>
</main>
<div class="pops-alert">

</div>

<main>
    <div class="top-main">
        <h1>Редагування контенту</h1>
        @include('admin.logout')
    </div>
    <div class="rubrics">
        @forelse($emails as $email)
            <div class="rubric @if(1 == $loop->iteration) active @endif">
                <div class="rub-num">
                    <p>#{{ $loop->iteration }}</p>
                    <p>перший блок</p>
                </div>
                <div class="rub-name">{{ $email->title }}</div>
                <div class="rub-text">Його текстова информація. Також что буде якщо її немає?</div>
            </div>
        @empty
        @endforelse
    </div>
    <div class="tiny-content">
        <div class="under-back"></div>
        <div class="nacc scrollbar">
            @forelse($emails as $email)
                <div class="nacc-content @if(1 == $loop->iteration) active @endif">
                    <h3>{{ $email->title }} <a href="javascript:void(0)">Переглянути</a></h3>
                    <form action="{{ route('admin.emails.update', $email->id) }}" class="form-content" method="post">
                        @method('PUT')
                        @csrf
                        <div class="seo-column">
                            <div>
                                {!! Form::text('subject', $email->subject??null, ['class' => 'form-control']) !!}
                                <label for="seo-title">Тема
                                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                                        <span class="tooltiptext">Підказка</span>
                                    </div>
                                </label>
                            </div>
                            <div>
                                {!! Form::text('copy', $email->copies??null, ['class' => 'form-control']) !!}
                                <label for="seo-title">Копія
                                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                                        <span class="tooltiptext">Перелік адрес, через кому.</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {!! Form::textarea('content', $email->content??null, ['class'=>'my-editor']) !!}
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

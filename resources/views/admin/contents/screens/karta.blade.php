<div class="nacc-content @if(1 == $loop->iteration) active @endif">
    <h3>{{ $screen->title }} <a href="javascript:void(0)">Переглянути</a></h3>
    <form action="{{ route('admin.screen.update', $screen->id) }}" class="form-content" method="post">
        @method('PUT')
        @csrf

        <div class="seo-column">
            <div>
                {!! Form::text('headings[]', $screen->headings[0]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №1
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[1]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №2
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[2]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №3
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[3]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №4
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[4]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №5
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[5]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №6
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[6]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №7
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[7]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №8
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[8]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №9
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[9]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №10
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                {!! Form::text('headings[]', $screen->headings[10]??null, ['class' => 'form-control']) !!}
                <label for="seo-title">Заголовок №11
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
        </div>

        <div style="width: 100%">
            <button type="submit" class="btn btn-red">зберегти</button>
        </div>
    </form>
</div>

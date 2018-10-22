<div class="nacc-content @if(1 == $loop->iteration) active @endif">
    <h3>{{ $screen->title }} <a href="javascript:void(0)">Переглянути</a></h3>
    <form action="{{ route('admin.screen.update', $screen->id) }}" class="form-content" method="post">
        @method('PUT')
        @csrf
        {!! Form::textarea('content', $screen->content??null, ['class'=>'my-editor']) !!}
        {!! Form::textarea('description', $screen->description??null, ['class'=>'my-editor']) !!}
        <button type="submit" class="btn btn-red">зберегти</button>
    </form>
</div>

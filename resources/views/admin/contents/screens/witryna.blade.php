<div class="nacc-content">
    <h3>{{ $screen->title }} <a href="javascript:void(0)">Переглянути</a></h3>
    <form action="{{ route('admin.screen.update', $screen->id) }}" class="form-content" method="post"
          enctype="multipart/form-data">
        @method('PUT')
        @csrf

        <div class="seo-column">
            @include('admin.contents.screens.slider')
        </div>
        <button type="submit" class="btn btn-red">зберегти</button>
    </form>
</div>

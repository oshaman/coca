<div class="nacc-content @if(1 == $loop->iteration) active @endif">
    <h3>{{ $screen->title }} <a href="javascript:void(0)">Переглянути</a></h3>
    <form action="{{ route('admin.screen.update', $screen->id) }}" class="form-content" method="post">
        @method('PUT')
        @csrf

        <div class="seo-column">
            <div>
                <input id='seo-title' type="text" class="form-control" name="seo_title"
                       value="{{ $screen->title??'' }}">
                <label for="seo-title">SEO_TITLE
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>
            <div>
                <input id='seo-title' type="text" class="form-control" name="seo_title"
                       value="{{ $screen->title??'' }}">
                <label for="seo-title">SEO_TITLE
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>

        </div>
        <div class="seo-column">
            <div>
                <input id='seo-title' type="text" class="form-control" name="seo_title"
                       value="{{ $screen->title??'' }}">
                <label for="seo-title">SEO_TITLE
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
            </div>

        </div>
        <!--<textarea name="content"></textarea>-->
        <textarea name="content" class='my-editor'></textarea>
        <button type="submit" class="btn btn-red">зберегти</button>
    </form>

</div>

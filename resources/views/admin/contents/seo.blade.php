<main>
    <div class="top-main">
        <h1>SEO текст</h1>
        @include('admin.logout')
    </div>
    <div class="seo-part">
        <div class="under-back"></div>
        <div class="seo-url">
            <p>URL: “/”</p>
        </div>
        <form class="form-seo" action="{{ route('admin.seo.update', ['id'=>1]) }}" method="post">
            <input name="_method" type="hidden" value="PUT">
            @csrf
            <div class="seo-column">
                <div>
                    <input id='seo-title' type="text" class="form-control" name="seo_title"
                           value="{{ $seo->seo_title??'' }}">
                    <label for="seo-title">SEO_TITLE
                        <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                            <span class="tooltiptext">Підказка</span>
                        </div>
                    </label>
                </div>
                <div>
                    <input id='seo-description' type="text" class="form-control" name="seo_description"
                           value="{{ $seo->seo_description??'' }}">
                    <label for="seo-description">SEO_DESCRIPTION
                        <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                            <span class="tooltiptext">Підказка</span>
                        </div>
                    </label>
                </div>
                <div>
                    <input id='og-title' type="text" class="form-control" name="og_title"
                           value="{{ $seo->og_title??'' }}">
                    <label for="og-title">OG_TITLE
                        <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                            <span class="tooltiptext">Підказка</span>
                        </div>
                    </label>
                </div>

            </div>
            <div class="seo-column">
                <div>
                    <input id='seo-keywords' type="text" class="form-control" name="seo_keywords"
                           value="{{ $seo->seo_keywords??'' }}">
                    <label for="seo-keywords">SEO_KEYWORDS
                        <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                            <span class="tooltiptext">Підказка</span>
                        </div>
                    </label>
                </div>
                <div>
                    <input id='og-image-load' type="text" name="og_image" value="{{ $seo->og_image??'' }}">
                    <label for="og-image">OG_IMAGE
                        <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                            <span class="tooltiptext">Підказка</span>
                        </div>
                    </label>
                </div>
                <div>
                    <input id='og-description' type="text" class="form-control" name="og_description" value="{{ $seo->og_description??'' }}">
                    <label for="og-description">OG_DESCRIOTION
                        <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                            <span class="tooltiptext">Підказка</span>
                        </div>
                    </label>
                </div>
            </div>
            <div class="seo-texts">
                <label>SEO_TEXT
                    <div class="tooltip"><img src="{{asset('admn')}}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </label>
                <textarea class="my-editor" name="seo_text"> {!! $seo->seo_text??''!!}</textarea>
            </div>
            <div>
                <button type="submit" class="btn btn-red">зберегти</button>
            </div>

        </form>
    </div>
</main>
<div class="pops-alert"></div>

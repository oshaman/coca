<main>
    <div class="top-main">
        <h1>Рамки для фото</h1>
        @include('admin.logout')
    </div>
    <div class="gallery">
        <div class="under-back"></div>
        <div class="panel">
            <div class="add-frame">
                Додати Рамку
                <p><img src="{{ asset('admn') }}/imgs/plus.svg" alt="+"></p>
            </div>
        </div>
        <div class="frames scrollbar">

            @forelse($frames as $frame)
                <div class="frame">
                    <div class="photo-frame">
                        <img src="{{ asset('assets') }}/images/frames/{{ $frame->filename }}" alt="st">
                    </div>
                    <div class="name-frame">{{ $frame->title }}</div>
                    <div class="del-frame" data-id="{{ $frame->id }}">
                        <svg viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.49907 14.6951C7.65812 14.6951 7.78721 14.5663 7.78721 14.407V4.89849C7.78721 4.73915 7.65812 4.61035 7.49907 4.61035C7.34002 4.61035 7.21094 4.73915 7.21094 4.89849V14.407C7.21094 14.5663 7.34002 14.6951 7.49907 14.6951Z"
                                fill="#F40009"/>
                            <path
                                d="M4.61821 14.6951C4.77726 14.6951 4.90635 14.5663 4.90635 14.407V4.89849C4.90635 4.73915 4.77726 4.61035 4.61821 4.61035C4.45916 4.61035 4.33008 4.73915 4.33008 4.89849V14.407C4.33008 14.5663 4.45916 14.6951 4.61821 14.6951Z"
                                fill="#F40009"/>
                            <path
                                d="M10.3799 14.6951C10.539 14.6951 10.6681 14.5663 10.6681 14.407V4.89849C10.6681 4.73915 10.539 4.61035 10.3799 4.61035C10.2209 4.61035 10.0918 4.73915 10.0918 4.89849V14.407C10.0918 14.5663 10.2209 14.6951 10.3799 14.6951Z"
                                fill="#F40009"/>
                            <path
                                d="M14.1264 1.72881H10.0798C10.0481 1.36864 9.93715 0.761254 9.55739 0.371407C9.31709 0.125051 9.01224 0 8.65149 0H5.77042C5.40968 0 5.10483 0.125051 4.86453 0.371407C4.48476 0.761254 4.37383 1.36864 4.34214 1.72881H0.87212C0.713069 1.72881 0.583984 1.85761 0.583984 2.01695C0.583984 2.17629 0.713069 2.30508 0.87212 2.30508H1.4602L2.01198 15.5654C2.02265 16.0615 2.33153 17 3.42615 17H11.5723C12.667 17 12.9758 16.0615 12.9862 15.5714L13.5383 2.30508H14.1264C14.2854 2.30508 14.4145 2.17629 14.4145 2.01695C14.4145 1.85761 14.2854 1.72881 14.1264 1.72881ZM5.27829 0.772492C5.40737 0.640525 5.56844 0.576271 5.77042 0.576271H8.65149C8.85348 0.576271 9.01454 0.640525 9.14363 0.772492C9.37558 1.00963 9.46865 1.42685 9.50092 1.72881H4.92129C4.95356 1.42685 5.04663 1.00963 5.27829 0.772492ZM12.4102 15.5533C12.4085 15.6423 12.3687 16.4237 11.5723 16.4237H3.42615C2.63839 16.4237 2.59114 15.6409 2.58797 15.5472L2.03676 2.30508H12.9614L12.4102 15.5533Z"
                                fill="#F40009"/>
                        </svg>
                    </div>
                <!--<div class="del-frame"><img src="{{ asset('admn') }}/imgs/urn.svg" alt="urn"></div>-->
                </div>
            @empty
            @endforelse

        </div>
    </div>
</main>
<div class="pop-trip">
    <div class="pop-header">
        <p>Додати рамку</p>
        <div class="close"><img src="{{ asset('admn') }}/imgs/close-red.svg" alt="close"></div>
    </div>
    <div class="pop-form">
        {{ Form::open(['url'=>route('admin.photo-frame.store'), 'method'=>'post', 'class'=>'form-trip', 'files'=> true ]) }}
        <div class="form-trip-info">
            <div>Напишіть назву для рамки
                <div class="tooltip"><img src="{{ asset('admn') }}/imgs/Subtract.svg" alt="1">
                    <span class="tooltiptext">Про макс к-сть символів</span>
                </div>
            </div>
            <div>
                <input id='frame-name' type="text" class="form-control" name="title" value="{{ old('title')??'' }}"
                       required>
                <label for="frame-name">Назва</label>
            </div>
        </div>
        <div class="form-trip-file">
            <div>
                <div class="trip-photo">Фото рамки
                    <div class="tooltip"><img src="{{ asset('admn') }}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>
                </div>
                <input id="upload-doc" type="file" name="filename">
                <label for="upload-doc" class="btn btn-grey upload-doc">Завантажити</label>
                <input type="text" id="filename" class="filename" disabled>
            </div>
        </div>
        <div class="trip-buttons">
            <button type="submit" class="btn">Додати</button>
        </div>
        {{ Form::close() }}
    </div>
</div>
<div class="pops-alert">

</div>

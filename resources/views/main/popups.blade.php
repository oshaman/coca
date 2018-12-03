<div class="cd-modal">
    <div class="cd-modal-content block_privacy">
        <div class="headline">
            <div class="close-privacy">
                <a href="#" class="modal-close close-privacy-btn"><!-- <i class="fal fa-times"></i> --></a>
            </div>
        </div>
        <div class="priv-content">
            {!! $screen->content??'' !!}
        </div>
    </div>
</div>
<div class="cd-modal">
    <div class="cd-modal-content block_privacy">
        <div class="headline">
            <h3>Згода на обробку персональних даних</h3>
            <div class="close-privacy">
                <a href="#" class="modal-close close-privacy-btn"><!-- <i class="fal fa-times"></i> --></a>
            </div>
        </div>

        <div class="priv-content">
            {!! $screen->additionally??'' !!}
        </div>
    </div>
</div>




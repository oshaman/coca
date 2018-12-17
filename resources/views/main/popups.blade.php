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
<div class="cd-modal_check">
    <div class="cd-modal-content block_privacy">
        <div class="headline">
            <h3>Зверніть увагу</h3>
            <div class="close-privacy">
                <a href="#" class="modal-close close-privacy-btn"><!-- <i class="fal fa-times"></i> --></a>
            </div>
        </div>

        <div class="priv-content">
            <p>
                Натискаючи «Забронювати», Ви підтверджуєте вашу згоду на обробку,
                передачу та зберігання компанією наданих вами персональних даних з
                метою обробки вашого запиту та формування статистичних даних. Ви
                можете ознайомитися з нашою політикою з обробки даних за цим <span class="cd-modal_check_text_link">посиланям</span> .
            </p>
        </div>
        <div class="cd-modal_check-bottom">
            <div class="cd-modal_check_ok">
                Згоден
            </div>
            <div class="cd-modal_check_text">
               Не згоден
            </div>
        </div>
    </div>
</div>




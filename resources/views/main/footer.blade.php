<footer class="footer">
    <div class="container">
        <div class="footer__columns">
            <div class="footer__column">
                <div class="logo_footer">
                    <img src="{{ asset('assets') }}/img/icon/logo_footer.svg" alt="">
                </div>
                <div class="footer__local_icon">
                    <a target="_blank" class="" href="{{ $screen->headings[0]??'#' }}">
                        <img src="{{ asset('assets') }}/img/icon/fb.svg" alt="">
                    </a>
                    <a target="_blank" class="" href="{{ $screen->headings[0]??'#' }}">
                        <img src="{{ asset('assets') }}/img/icon/g+.svg" alt="">
                    </a>
                    <a target="_blank" class="" href="{{ $screen->headings[0]??'#' }}">
                        <img src="{{ asset('assets') }}/img/icon/pl.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="footer__column">
                <p>Всі права захищені. {{ date('Y') }}</p>
            </div>
            <div class="footer__column">
                <div class="logo_flesh">
                    <img src="{{ asset('assets') }}/img/icon/logo_fresh.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</footer>

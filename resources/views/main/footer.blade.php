<footer class="footer">
    <div class="container">
        <div class="footer__columns">
            <div class="footer__column">
                <div class="logo_footer">
                    <a href="#">
                        <img data-src="{{ asset('assets') }}/img/icon/logo_footer.svg" alt="">
                    </a>
                </div>
                <div class="footer__local_icon">
                    @if(!empty($screen->headings[0]))
                        <a target="_blank" class="" href="{{ $screen->headings[0]??'#' }}">
                            <img data-src="{{ asset('assets') }}/img/icon/fb.svg" alt="">
                        </a>
                    @endif
                    @if(!empty($screen->headings[1]))
                        <a target="_blank" class="" href="{{ $screen->headings[0]??'#' }}">
                            <img data-src="{{ asset('assets') }}/img/icon/g+.svg" alt="">
                        </a>
                    @endif
                    @if(!empty($screen->headings[2]))
                        <a target="_blank" class="" href="{{ $screen->headings[0]??'#' }}">
                            <img data-src="{{ asset('assets') }}/img/icon/pl.svg" alt="">
                        </a>
                    @endif
                </div>
            </div>
            <div class="footer__column">
                {{--<p>Всі права захищені. {{ date('Y') }}</p>--}}
                <a href="#">{{ $screen->headings[3]??'' }}</a>
                <a href="#">{{ $screen->headings[4]??'' }}</a>
            </div>
            <div class="footer__column">
                <div class="logo_flesh">
                    <div class="fresh">
                        <div class="created">САЙТ РАЗРАБОТАН</div>
                        <a href="https://freshweb.agency/?utm_source=visitcoke.com.ua" target="_blank">
                            <div class="fresh-logo">
                                <span>F</span><span>R</span><span>E</span><span>S</span><span>H</span>
                            </div>
                        </a>
                        <div class="creative">CREATIVE WEB AGENCY</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

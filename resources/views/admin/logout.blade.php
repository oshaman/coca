<div class="my-acc">
    <div class="my-mail">
        <img src="{{ asset('admn') }}/imgs/chicken.svg" alt="icon">
        <span>{{ Auth::user()->name ?? Auth::user()->email }}</span>
    </div>

    <a class="btn btn-grey" href="javascript:void(0)"
        onclick="event.preventDefault();
        document.getElementById('logout-form').submit();">
        Вийти
    </a>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form>


</div>

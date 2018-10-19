<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow" />
    <title>{{ $title??'' }}</title>
    <link rel="stylesheet" href="{{ asset('admn') }}/css/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="{{ asset('admn') }}/css/style.css">
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body class="user-page">
@yield('header')

@yield('content')

@yield('footer')

<script src="{{ asset('admn') }}/js/jquery-3.3.1.min.js"></script>
<script src="{{ asset('admn') }}/js/jquery.mCustomScrollbar.concat.min.js"></script>
{!! $jss??'' !!}
<script src="{{ asset('admn') }}/js/main.js"></script>
</body>
</html>
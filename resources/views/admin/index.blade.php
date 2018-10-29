@extends('layouts.admin')

@section('jss')
    {!! $jss !!}
@endsection

@section('body_class')
    {!! $body_class !!}
@endsection

@section('header')
    @include('admin.header')
@endsection

@section('content')
    {!! $content !!}
@endsection

@section('footer')
   @include('admin.footer')
@endsection

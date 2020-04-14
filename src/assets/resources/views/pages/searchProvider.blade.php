@extends('frontend.provider-layout.app')

@section('styles')

@endsection

@section('content')

    <section class="section">
        <div class="container">
            <div class="row">
                <h4 class="section-heading">Service Providers</h4>
            </div>
            <div class="row">
                @foreach($providers as $agent)
                    <div class="col s12 m4">
                        <div class="card-panel center card-agent">
                            <span class="card-image-bg" style="background-image:url({{Storage::url('users/'.$agent->image)}});"></span>
                            <h5 class="m-b-0">
                                <a href="{{ route('agents.show',$agent->id) }}" class="truncate">Tapiwa Rushwaya</a>
                            </h5>
                            <h6 class="email">{{ $agent->speciality }} in {{ str_limit($agent->city) }}</h6>
                            <p class="about">07745643922</p>
                            <p class=""><h6>name@domain.com</h6></p>
                        </div>
                    </div>
                   
                @endforeach 

            </div>

            <div class="m-t-30 m-b-60 center">
                {{ $providers->links() }}
            </div>

        </div>
    </section>

@endsection

@section('scripts')

@endsection
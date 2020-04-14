
<!-- SEARCH SECTION -->

<section class="nav-primary">
    <div class="container">
        <div class="row m-b-0">
            <div class="col s12">

                <form action="{{ route('search-provider')}} " method="GET">

                    <div class="searchbar">
                        <div class="input-field col s12 m3">
                            <input type="text" name="city" id="autocomplete-input" class="autocomplete custominputbox" autocomplete="off">
                            <label for="autocomplete-input">Enter City or State</label>
                        </div>

                        <div class="input-field col s12 m2">
                            <select name="speciality" class="browser-default">
                                <option value="" disabled selected>Specialist</option>
                                <option value="plumber">Plumber</option>
                                <option value="painter">Painter</option>
                                <option value="electrician">Electrician</option>
                                <option value="carpenter">Carpenter</option>
                            </select>
                        </div>

                        <div class="input-field col s12 m2">
                            <select name="availability" class="browser-default">
                                <option value="" disabled selected>Availability</option>
                                <option value="days">Days</option>
                                <option value="hours">Hours</option>
                            </select>
                        </div>

                       

                        <div class="input-field col s12 m2">
                            <input type="text" name="maxperiod" id="maxperiod" class="custominputbox">
                            <label for="maxperiod">Hours/Days</label>
                        </div>
                        
                        <div class="input-field col s12 m1">
                            <button class="btn btnsearch waves-effect waves-light w100" type="submit">
                                <i class="material-icons">search</i>
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    </div>
</section>
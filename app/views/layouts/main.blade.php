<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>_Twi</title>

    <link rel="stylesheet" href="/br/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/css/style.css"/>

    <script src="/br/jquery/dist/jquery.min.js"></script>

    <script src="/js/init.js"></script>

    <script src="/br/underscore/underscore-min.js"></script>
    <script src="/br/backbone/backbone.js"></script>
    <script src="/js/lib/BackboneManipulator.js"></script>

    <script src="/js/lib/models_and_collections.js"></script>
    <script src="/js/pages/index.js"></script>
</head>

<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">_Twi</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>

    <div class="container content">
        @yield('content')
    </div>
</body>
</html>
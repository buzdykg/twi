@extends('layouts.main')

@section('content')
    <script type="text/template" id="message_template">
        <tr>
            <td><%=item.get('date_sent')%></td>
            <td><%=item.get('from')%></td>
            <td><%=item.get('to')%></td>
            <td><%=item.get('body')%></td>
        </tr>
    </script>

    <script type="text/template" id="options_template">
        <% _.each(items, function(i) { %>
        <option value="<%= i.key %>" <% if(selected == i.key) { %>selected<% } %>><%= i.value %></option>
        <% }); %>
    </script>

    <div ng-app="phonecatApp">
        <div class="row">
            <div class="col-md-6 col-md-push-3">
                <select name="phone_number" class="select-wide">
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 col-md-push-1 feature">
                <h3>Send SMS</h3>
                <div class="feature-content">
                    <form id="form_send_sms">
                        <input type="text" name="to_number" placeholder="Receiver"/>
                        <textarea name="content" placeholder="Message"></textarea>
                        <input id="send_sms" value="send!" type="submit"/>
                    </form>
                </div>
            </div>
            <div class="col-md-6 col-md-push-1 feature">
                <h3>Sent SMS</h3>
                <div class="feature-content">
                    <table id="messages">
                        <thead>
                        <tr>
                            <th>date</th>
                            <th>from</th>
                            <th>to</th>
                            <th>content</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@stop
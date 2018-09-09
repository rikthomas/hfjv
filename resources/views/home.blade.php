@extends('layouts.app')

@push('styles')
<link rel="stylesheet" href="/css/dataTables.bulma.min.css" />
<link rel="stylesheet" href="/css/font-awesome.min.css" />
@endpush

@section('content')
    <section class="section">   
        <div class="columns">  
            <div class="column is-three-fifths is-offset-one-fifth">
                <article class="message">
                    <div class="message-header">
                        <p>Cases</p>
                    </div>
                    <div class="message-body">
                        <table class="table is-striped is-hoverable is-fullwidth" id="caseTable">
                            <thead>
                                <tr>
                                    <th>Case</th>
                                    <th>Anaesthetist</th>
                                    <th>Date</th>
                                    <th>Follow Up</th>
                                </tr>
                            </thead>                          
                        </table>
                    </div>
                </article>
                <a href="/export" class="button is-link">Export DB</a>
            </div>
        </div>
    </section>
@endsection

@push('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
<script src="/js/dataTables.bulma.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
    $('#caseTable').DataTable({
        processing: true,
        serverSide: true,
        ajax: '/datatables/cases',
        columns: [
            {data: 'id', name: 'id',
            render: function (data){
                    return '<a href="/patient/' + data + '">' + '#' + data + '</a>';
                }},
            {data: 'anaesthetist', name: 'anaesthetist'},
            {data: 'created_at', name: 'created_at'},
            {data: 'fucomplete', name: 'fucomplete',
            render: function (data){
                if (data==1) {
                    return  '<i class="fa fa-thumbs-up" style="color:green" aria-hidden="true"></i>';
                } else {
                    return  '<i class="fa fa-thumbs-down" style="color:red" aria-hidden="true"></i>'
                }
            }}
        ],
        order: [[0, 'desc']]
    });
});
</script>
@endpush

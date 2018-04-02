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
                                </tr>
                            </thead>                          
                        </table>
                    </div>
                </article>
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
            render: function (data, type, row, meta){
                    return '<a href="/patient/' + data + '">' + '#' + data + '</a>';
                }},
            {data: 'anaesthetist', name: 'anaesthetist'},
            {data: 'created_at', name: 'created_at'},
        ],
        order: [[0, 'desc']]
    });
});
</script>
@endpush

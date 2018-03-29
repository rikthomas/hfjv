@extends('layouts.app')

@push('styles')
<link href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" rel="stylesheet">
@endpush

@section('content')
            <div class="column is-8">
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
                </article>
            </div>
@endsection

@push('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
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
        ]
    });
});
</script>
@endpush

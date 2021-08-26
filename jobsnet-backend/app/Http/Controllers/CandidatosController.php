<?php

namespace App\Http\Controllers;

use App\Models\Candidatos;
use Illuminate\Http\Request;

class CandidatosController extends Controller
{
    public function __construct(Candidatos $candidato)
    {
        $this->candidato = $candidato;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $candidato = $this->candidato->all();
        return $candidato;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules =[
            'Nome' => 'required',
            'Cpf' => 'required | unique:candidatos',
            'Rg' => 'required | unique:candidatos',
            'DtNascimento' =>'required',
            'Cep' =>'required',
            'Endereco' => 'required',
            'Numero' => 'required',
            'Bairro' =>'required',
            'Email'=>'required| unique:candidatos',
            'CargoPretendido' => 'required'
        ];

        $feedback =[
            'required' =>'O campo :attribute é obrigatorio',
            'Cpf.unique' => 'CPF já cadastrado.',
            'Rg.unique' => 'Rg já cadastrado',
            'Email.unique' => 'Email já cadastrado.'
        ];

        $request->validate($rules, $feedback);
        $candidato = $this->candidato->create($request->all());

        return $candidato;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Candidatos  $candidatos
     * @return \Illuminate\Http\Response
     */
    public function show(Candidatos $candidatos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Candidatos  $candidatos
     * @return \Illuminate\Http\Response
     */
    public function edit(Candidatos $candidatos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Candidatos  $candidatos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Candidatos $candidatos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Candidatos  $candidatos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Candidatos $candidatos)
    {
        //
    }
}

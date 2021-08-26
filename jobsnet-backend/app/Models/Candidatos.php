<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidatos extends Model
{
    use HasFactory;
    protected $fillable =[
        'id',
        'Nome',
        'CargoPretendido',
        'DtNascimento',
        'EstadoCivil',
        'Cep',
        'Endereco',
        'Numero',
        'Bairro',
        'Cidade',
        'Estado',
        'TelefoFixo',
        'TelefoCelular',
        'Email',
        'Rg',
        'Cpf',
        'PossuiVeiculo',
        'PossuiCnh',
        'SegundoGrau',
        'EnsinoTecnico',
        'Graduacao',
        'PosGraduacao',
        'UltimaEmpresa',
        'Funcao',
        'DtAdmissao',
        'DtDemissao',
        'AtividadesExercidas',
        'ObjetivosFuturos',
        'ConheceAlguem',
    ];
}

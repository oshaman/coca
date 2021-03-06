<?php

namespace App\Jobs;

use App\Mail\NewOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;

class OrderCreated implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $excursion;
    protected $content;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($excursion, $content)
    {
        $this->excursion = $excursion;
        $this->content = $content;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = new NewOrder($this->excursion, $this->content);
        Mail::to($this->excursion)->send($email);
    }
}
